package com.abacef.server;

import spark.Request;
import spark.Response;
import spark.Route;

import static com.abacef.MainApp.*;

public class PostDomainObject implements Route {
    private DomainObject items;

    public PostDomainObject(DomainObject items) {
        this.items = items;
    }

    public String addItem(String item) {
        return items.addItem(item);
    }

    @Override
    public Object handle(Request request, Response response) {
        final String item = request.body();
        if (item == null || item.isEmpty()) {
            response.status(HTTP_BAD_REQUEST);
            return AN_EMPTY_STRING;
        } else {
            String issue = addItem(item);
            if (issue.isEmpty()) {
                response.status(HTTP_CREATED);
                return AN_EMPTY_STRING;
            } else {
                response.status(HTTP_CONFLICT);
                response.body(issue);
                return response.body();
            }
        }
    }
}
