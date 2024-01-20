# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
(https://maps.googleapis.com/maps/api/directions/json?origin=place_id%3AChIJNZNa4IpzhlQRjc2KkYm9ZJs&destination=place_id%3AChIJhSw0yn1xhlQRovW0FzTiNNY&waypoints=place_id%3AChIJHZSzNzNyhlQRzmus61cqE5Y%7Cplace_id%3AChIJs6v-hc5zhlQRX4TScufpbeM%7Cvia%3Aplace_id%3AChIJx89iDhxyhlQRuqm5bA3I36s%7Cvia%3Aplace_id%3AChIJT7nx--RxhlQRTv4m-mFh_bM%7Cvia%3Aplace_id%3AChIJdYGgQ-5xhlQRtLWuL9Tz3ZQ&mode=bicycling&transit_routing_preference=less_walking&avoid=highways&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE)
```

Copy/paste the JSON results and save them into the empty file ```mydirections.json``` in this repository

## Optional URLs

Read the Rubric to find out about what options exist to earn more marks. Here is where you can provide these additional links to place ids or other items telling a story about your chosen directions API

Vancouver Museum: https://maps.google.com/?cid=10814033687351159758

### Simple option:

(returns map-preferred) Maps PlaceID search: https://www.google.com/maps/place/?q=place_id:ChIJFfiCrdo4Qm0RqPwuOAVtaj8
### Efficient option

(returns JSON) API PlaceID link https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJV2BQ4laeekgRFauLvdXbFXE&key=<INSERTKEY>

  which the JSON will have a CID that can be directly used as a URL like https://maps.google.com/?cid=4569584641105657000


____
## Rubric

Note: MarkDown (.md) documents are not HTML and therefore are best viewed in the github.com website, not on the pages github.io page. Marking will occur using the github.com source. 

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown and results in the JSON file with a unique origin and destination in directions earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%. Explore the API documentation for parameters we have not used.
4. Tell the story of your route. Include more than 2 "stops", and/or including additional links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
