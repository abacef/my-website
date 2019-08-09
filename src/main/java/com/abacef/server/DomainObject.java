package com.abacef.server;

import spark.Request;
import spark.Response;
import spark.Route;

import java.util.HashSet;
import java.util.Set;

import static com.abacef.MainApp.*;

public class DomainObject implements Route {
    private Set<String> items;

    public DomainObject() {
        this.items = new HashSet<>();
    }

    public boolean addItem(String item) {
        return items.add(item);
    }

    @Override
    public Object handle(Request request, Response response) {
        final String item = request.body();
        if (item == null || item.isEmpty()) {
            response.status(BAD_REQUEST);
        } else if (!addItem(item)) {
            response.status(CONFLICT);
        } else {
            response.status(CREATED);
        }
        return AN_EMPTY_STRING;
    }
}
