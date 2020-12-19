# README

Photography portfolio site is a Rails app that features Active Storage which gives the ability to upload images
that gets saved to Amazon S3. Google maps Javascript API is used to display markers of various locations
where photo enthusiasts can go to for the next photography adventure. 

The app is authenticated using Devise gem so users must create a sign-in account before viewing the website.

* Ruby version
    * `2.7.2`

* Rails version
    * `5.2`

* To run locally
    * `rails server` or `heroku local web`
    * `rails console`
    * `rake db:migrate`
    * Change API key for Google maps
    * For local user registration and password reset emails, verify in console
    
* System dependencies
    * Heroku account
    * Heroku CLI
    * Google Maps Platform account with API keys generated for local, development, and production environments 
    * AWS account 

* Configuration
    * For Active Storage installation:
        *  `rails active_storage:install`, it will generate `active_storage_blobs` and `active_storage_attachments`

* Deployment instructions
    * Run the following if any rails migrations are needed
        * `heroku run db:migrate --app alice-stg`
        * `heroku run db:migrate --app alice-prod`

    * To deploy to staging and production Heroku
        * `git push staging develop:master`
        * `git push production master:master`

* Site links
    * https://alice-stg.herokuapp.com/users/sign_in
    * https://alice-prod.herokuapp.com/users/sign_in       

* Helpful resources
    * https://edgeguides.rubyonrails.org/active_storage_overview.html     
    * https://developers.google.com/maps/documentation/javascript/overview
    * https://devcenter.heroku.com/articles/how-heroku-works
    * https://elements.heroku.com/addons/sendgrid