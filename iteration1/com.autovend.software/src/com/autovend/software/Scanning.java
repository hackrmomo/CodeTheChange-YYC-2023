package com.autovend.software;
import com.autovend.devices.observers.AbstractDeviceObserver;
import com.autovend.devices.observers.BarcodeScannerObserver;
import com.autovend.Barcode;
import com.autovend.devices.AbstractDevice;
import com.autovend.devices.BarcodeScanner;


public class Scanning implements BarcodeScannerObserver {
	private SoftwareManager manager;
	public Scanning(SoftwareManager manager, BarcodeScanner ...scanners) {
		for (BarcodeScanner scanner: scanners) {
			scanner.register(this);
		}
		this.manager = manager;
	}	

	@Override
	public void reactToBarcodeScannedEvent(BarcodeScanner barcodeScanner, Barcode barcode) {
		this.manager.blockCheckoutSystem();
		this.manager.addedItemViaBarcode(barcode);
	}
	/* 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * GodSoftwareStaticClass
	 * 
	 * Driver
	 * - makes a godSoftwareInstance that has all the statistics shared by 
	 * 	 different use cases (currentTotal, otherStuff, moreThings)
	 * - makes a checkout station
	 * - makes a scanning software, passing in the checkoutStation
	 * - makes a payWithCash, passing in the checkoutStation
	 * - makes a receiptSoftware, passing in the checkoutStation
	 * 
	 * Each software class does
	 * 		checkoutStation.hardwareThatIsRelevantToMe.register(software)
	 * 
	 * *** NEVER ever directly invoke a reactEvent in your software; that is the hardware's job
	 */

	@Override
	public void reactToEnabledEvent(AbstractDevice<? extends AbstractDeviceObserver> device) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void reactToDisabledEvent(AbstractDevice<? extends AbstractDeviceObserver> device) {
		// TODO Auto-generated method stub
		
	}
}

