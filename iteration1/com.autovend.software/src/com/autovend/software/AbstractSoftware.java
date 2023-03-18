package com.autovend.software;

import java.util.ArrayList;

public class AbstractSoftware<T extends AbstractSoftwareObserver> {
	protected ArrayList<T> observers = new ArrayList<>();

	/**
	 * Locates the indicated observer and removes it such that it will no longer be
	 * informed of events from the software. If the observer is not currently
	 * registered with the software, calls to this method will return false, but
	 * otherwise have no effect.
	 * 
	 * @param observer
	 *            The observer to remove.
	 * @return true if the observer was found and removed, false otherwise.
	 */
	public final boolean deregister(T observer) {
		return observers.remove(observer);
	}

	/**
	 * All observers registered with this device are removed. If there are none,
	 * calls to this method have no effect.
	 */
	public final void deregisterAll() {
		observers.clear();
	}

	/**
	 * Registers the indicated observer to receive event notifications from this
	 * device.
	 * 
	 * @param observer
	 *            The observer to be added.
	 */
	public final void register(T observer) {
		observers.add(observer);
	}
}
