package com.abacef.server;

import com.google.gson.Gson;

import java.util.HashSet;
import java.util.Set;

/**
 * Stores strings.
 * I do not want to do database things right now.
 * Just a RestAPI proof of concept
 */
public class DomainObject {
    private Set<String> items;

    public DomainObject() {
        items = new HashSet<>();
    }

    public boolean addItem(String item) {
        return items.add(item);
    }

}
