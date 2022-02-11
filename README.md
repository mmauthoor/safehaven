# ABOUT

Safehaven is a mobile-first app created predominantly for women and LGBTQA+ folks to report incidents of sexual assault across Australia. The app allows users to view incidents reported by other anonymous users across cities, and to easily report incidents themself. This is an app that we would prefer to not need, but unfortunately do. Although the locations pinpointed on the map are not themselves 'safe havens', we hope that this app may help users feel and stay safer in their day-to-day lives. 

# HOW IT WORKS

Safehaven uses Google Maps API so that users are able to seamlessly glide across the map and search for incidents of sexual assault across Australia. When a user wants to make a report, they navigate to "Report Incident" in the nav bar. Once the user has submitted their incident, we verify their email in our database (feature to come) and then publish the incident with a marker and info box on the map. 

# TECH USED

Safehaven is a full stack application built with: 

- REACT
- HTML 
- CSS
- JAVASCRIPT
- NODE.JS
- EXPRESS
- POSTGRESQL
- AXIOS
- MUI REACT LIBRARY 


# OUR APPROACH

Our team approached this project by first mapping out our application wireframe and user flow. 

![](https://i.imgur.com/pqwgt62.png)

![](https://i.imgur.com/n1Gs1FI.png)

![](https://i.imgur.com/9Q66fB1.png)

(Data)[goes here]

We then created a Trello board of features and split them into categories of features that we must have, vs features that would be nice to have once we'd reached our MVP.

We broke down our app into components to build and split into teams for pair programming: 

- App
- Map
- Incident Form
- Database


# BUGS + HURDLES

Current bugs:

- Update when finished to log any bugs

A few hurdles we had along the way: 

- Doing a mobile first design. This was a first for all of us so we had to really plan out how we would make each component work on mobile.
- Git version control
- google-maps-react vs google-map-react 
- Email verification (we ended up not using this right now as it chewed too much into us reaching an MVP. This is definitely something we will add as an additional feature in the future.)
- Middleware issues
- Manipulation of time/date data to make it suit the database schema. Originally we kept the time and date separate in the database. Storing a timestamp (combining time and date) would have been easier in terms of how the data interacted with the map and map markers. 
- Users can reports incidents anywhere in the world, but this map was created with Australian users in mind. 

# AREAS OF FUTURE WORK

- Email verification to ensure users reporting incidents are human and have access to their email accounts, and to add a sense of accountability to prevent bad faith actors spamming the app with inaccurate reports. Ideally, once a user submits a report, they would receive an email containing a URL that (when clicked) updates the database's email verification column to 'true' for the associated incident. Only after verification would the report be published on the map. 
- When a report is published, ideally the reporting user would receive an email containing a token or URL that allows them to edit or delete the report. This would provide users more control over their reports, e.g. in case they accidentally included identifying information in their report and wished to remove it. 
- Heat map data visualisation when the map is loaded on the home screen, to show report hotspots. On zoom, the heat map would fade out and individual report markers would appear. 
- We acknowledge that this is a highly sensitive topic and one fraught with ethical issues. As a real-world application, this app would undoubtedly require moderators to assess reports and ensure data is not contaminated by spam reports etc. 