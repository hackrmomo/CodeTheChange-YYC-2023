package com.autovend.software;

public interface SoftwareManagerObserver extends AbstractSoftwareObserver {
	/*
	 * Customer inserts bill into slot
	 * Slot calls deliver on its sink (line 72 of BillSlot.java)
	 * Slot's sink is validator (line 225 of SelfCheckoutStation.java)
	 * Calling deliver on validator actually calls validator's .accept method
	 * In validator's .accept method, on line 131, we have 
	 * 	observer.reactToValidBillDetectedEvent(this, bill.getCurrency(), bill.getValue());
	 * So, if we register an observer on billValidator, then, when the customer inserts a bill, 
	 * if the bill is legit, we'd get notified by billValidator

	 */
}
