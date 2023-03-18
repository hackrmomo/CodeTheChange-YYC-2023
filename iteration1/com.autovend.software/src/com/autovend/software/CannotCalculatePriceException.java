package com.autovend.software;

public class CannotCalculatePriceException extends Exception {
    public CannotCalculatePriceException(String errorMessage) {
        super(errorMessage);
    }
}
