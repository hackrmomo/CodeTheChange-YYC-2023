package com.autovend.software;
import com.autovend.devices.AbstractDevice;
import com.autovend.devices.ElectronicScale;
import com.autovend.devices.observers.AbstractDeviceObserver;
import com.autovend.devices.observers.ElectronicScaleObserver;

public class Scales {
	private SoftwareManager manager;
	
	public Scales(SoftwareManager manager, ElectronicScale scanningArea, ElectronicScale baggingArea) {
		this.manager = manager;
		scanningArea.register(new ScanningScaleObserver());
		baggingArea.register(new BaggingScaleObserver());
	}
	
	class ScanningScaleObserver implements ElectronicScaleObserver {
		@Override
		public void reactToEnabledEvent(AbstractDevice<? extends AbstractDeviceObserver> device) {
			// TODO Auto-generated method stub
			
		}
		@Override
		public void reactToDisabledEvent(AbstractDevice<? extends AbstractDeviceObserver> device) {
			// TODO Auto-generated method stub
			
		}
		@Override
		public void reactToWeightChangedEvent(ElectronicScale scale, double weightInGrams) {
			manager.addedItemOnScaleForScanning(weightInGrams);
		}
		
		@Override
		public void reactToOverloadEvent(ElectronicScale scale) {
			// TODO Auto-generated method stub
			
		}
		@Override
		public void reactToOutOfOverloadEvent(ElectronicScale scale) {
			// TODO Auto-generated method stub
			
		}	
	}
	
	class BaggingScaleObserver implements ElectronicScaleObserver {
		@Override
		public void reactToEnabledEvent(AbstractDevice<? extends AbstractDeviceObserver> device) {
			// TODO Auto-generated method stub
			
		}
		@Override
		public void reactToDisabledEvent(AbstractDevice<? extends AbstractDeviceObserver> device) {
			// TODO Auto-generated method stub
			
		}
		@Override
		public void reactToWeightChangedEvent(ElectronicScale scale, double weightInGrams) {
			manager.addedItemOnScaleForBagging(weightInGrams);
		}
		
		@Override
		public void reactToOverloadEvent(ElectronicScale scale) {
			// TODO Auto-generated method stub
			
		}
		@Override
		public void reactToOutOfOverloadEvent(ElectronicScale scale) {
			// TODO Auto-generated method stub
			
		}	
	}
	
}
