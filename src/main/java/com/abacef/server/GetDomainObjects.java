package com.abacef.server;

import com.google.gson.Gson;
import spark.Request;
import spark.Response;
import spark.Route;

import static com.abacef.MainApp.RESPONSE_TYPE_JSON;

public class GetDomainObjects implements Route {
    private DomainObject items;
    private Gson gson;

    public GetDomainObjects(DomainObject items, Gson gson) {
        this.items = items;
        this.gson = gson;
    }

    @Override
    public Object handle(Request request, Response response) {
        response.type(RESPONSE_TYPE_JSON);
        return gson.toJson(items);
    }
}
