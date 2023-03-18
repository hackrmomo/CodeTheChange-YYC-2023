package com.autovend.software;
import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;
import java.util.NoSuchElementException;

import com.autovend.Barcode;
import com.autovend.devices.BillDispenser;
import com.autovend.devices.SelfCheckoutStation;
import com.autovend.products.BarcodedProduct;
import static com.autovend.external.ProductDatabases.BARCODED_PRODUCT_DATABASE;

public class SoftwareManager {
	private SelfCheckoutStation selfCheckoutStation;
	private BigDecimal currentTotal;
	private double currentWeightInGramsScanningArea;
	private double currentWeightInGramsBaggingArea;
	
	public SoftwareManager(SelfCheckoutStation selfCheckoutStation) {
		this.selfCheckoutStation = selfCheckoutStation;
		this.currentTotal = new BigDecimal(0);
		this.currentWeightInGramsScanningArea = 0;
		this.currentWeightInGramsBaggingArea = 0;
	}
	
	public void blockCheckoutSystem() {
		selfCheckoutStation.scale.disable();
		selfCheckoutStation.baggingArea.disable();
		selfCheckoutStation.printer.disable();
		selfCheckoutStation.mainScanner.disable();
		selfCheckoutStation.handheldScanner.disable();
		selfCheckoutStation.billInput.disable();
		selfCheckoutStation.billOutput.disable();
		selfCheckoutStation.billValidator.disable();
		selfCheckoutStation.billStorage.disable();
		
		for (Map.Entry<Integer, BillDispenser> entry: selfCheckoutStation.billDispensers.entrySet()) {
			BillDispenser dispenser = entry.getValue();
			dispenser.disable();
		}
	}
	
	/*
	 * Even though the scales have public methods for getting weight, it's unclear if that's
	 * just for the hardware's internal use. 
	 * 
	 * I know I needed the weight for the add item functionality. And so, the ONLY way to keep
	 * track of that weight WITHOUT those public methods is if you count it yourself when the
	 * weight change is announced to observers.
	 * 
	 * We register observers on that hardware, when those observers react, they tell the SoftwareManager
	 * to change the value of its "statistics" accordingly.
	 * 
	 * Hardware -> Observers -> Manager -> Manager updates statistics accordingly
	 */
	
	public void addedItemOnScaleForScanning(double weightInGrams) {
		this.currentWeightInGramsScanningArea = weightInGrams;
	}
	
	public void addedItemOnScaleForBagging(double weightInGrams) {
		this.currentWeightInGramsBaggingArea += weightInGrams;
	}
	
	public void addedItemViaBarcode(Barcode barcode) throws CannotCalculatePriceException {
		BarcodedProduct item = BARCODED_PRODUCT_DATABASE.get(barcode);
		/*
		 * use case description is unclear as to what should happen if item does not exist;
		 * for now, an Exception is thrown but this should be clarified with the customer
		 */
		if (item == null) throw new NoSuchElementException("Item does not exist in the database!");
		
		/*
		 * if price is per kilogram, then, get the weight of the item in kilograms and figure out the
		 * new price; use case description is unclear as to what should happen if scanning scale
		 * cannot detect item (as then price could not be calculated); for now, an exception is thrown
		 */
		BigDecimal itemPrice = item.getPrice();
		if (!item.isPerUnit()) {
			if (this.currentWeightInGramsScanningArea == 0) 
				throw new CannotCalculatePriceException("The product you entered has a per-kilogram price;" + 
					" did not detect any weight on the scale, please purchase a greater quantity of your item");
			itemPrice = itemPrice.multiply(new BigDecimal(this.currentWeightInGramsScanningArea / 1000));
		}
		
		
		this.currentTotal = this.currentTotal.add(itemPrice);
		double expectedBaggingAreaWeight = this.currentWeightInGramsBaggingArea + this.currentWeightInGramsScanningArea;
	}
	
}
