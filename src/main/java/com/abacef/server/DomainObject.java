package com.abacef.server;

import java.util.HashSet;
import java.util.Set;

/**
 * Stores strings.
 * I do not want to do database things right now.
 * Just a RestAPI proof of concept
 */
public class DomainObject {

    private static final String ALREADY_EXISTS = "The entry already exists. Enter a unique one";
    private static final String MAX_EXCEDED = "Cannot add more than 10 entries";

    private static final int MAX_SIZE = 10;

    private Set<String> items;

    public DomainObject() {
        items = new HashSet<>();
    }

    public String addItem(String item) {
        if (items.size() == MAX_SIZE) {
            return MAX_EXCEDED;
        }
        if (items.add(item)) {
            return "";
        } else {
            return ALREADY_EXISTS;
        }
    }

}
