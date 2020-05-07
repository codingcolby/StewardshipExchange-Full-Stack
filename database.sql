CREATE DATABASE "stewardshipDB";

-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
	"username" VARCHAR (80) UNIQUE NOT NULL,
	"password" VARCHAR (1000) NOT NULL
);


CREATE TABLE "user_info" (
	"user_id" INT PRIMARY KEY,
	"user_auth_level" INT,
	"user_auth" boolean,
	"fname" VARCHAR(25) NOT NULL,
	"lname" VARCHAR(25) NOT NULL,
	"email" VARCHAR(75),
	"user_status" VARCHAR(45),
	"user_type" VARCHAR(25)
);

CREATE TABLE "user_status_list" (
  "user_status_id" INT PRIMARY KEY,
  "user_status_type" VARCHAR(40)
);

CREATE TABLE "typeofuser_list" (
  "typeofuser_id" INT PRIMARY KEY,
  "typeofuser_current" VARCHAR(45)
);

CREATE TABLE "user_credentials" (
  "cred_id" INT PRIMARY KEY,
  "user_id" INT,
  "username" VARCHAR(80) UNIQUE NOT NULL,
  "password" VARCHAR(150) NOT NULL,
  "auth_level" INT
);

CREATE TABLE "item_catagory_list" (
  "cat_id" INT PRIMARY KEY,
  "cat_name" VARCHAR(50)
);

CREATE TABLE "offer_status_list" (
  "off_status_id" INT PRIMARY KEY,
  "off_status_current" VARCHAR(50)
);

CREATE TABLE "offers" (
  "offer_id" INT PRIMARY KEY,
  "submitting_user_id" INT,
  "agency" VARCHAR(150),
  "contact_name" VARCHAR(75),
  "contact_email" VARCHAR(100),
  "10_digit_dash_phone1" VARCHAR(12),
  "phone1_ext" VARCHAR(10),
  "ship_options" VARCHAR(45),
  "state" VARCHAR(2),
  "city" VARCHAR(45),
  "off_cat" VARCHAR(150),
  "off_detail" text,
  "offer_status" VARCHAR(25)
  "submit_date" TIMESTAMP,
  "edit_date" TIMESTAMP
);

CREATE TABLE "stories" (
  "story_id" INT PRIMARY KEY,
  "submit_story_user_id" INT,
  "off_agency" VARCHAR(150),
  "received_agency" VARCHAR(150),
  "title" VARCHAR(75),
  "narrative" text,
  "photo_file" VARCHAR(100),
  "story_date" TIMESTAMP
);

CREATE TABLE "state_2char" (
  "state" VARCHAR(40),
  "state_abbrev" VARCHAR(2)
);

CREATE TABLE "site_contact" (
  "contact_id" INT PRIMARY KEY,
  "person_name" VARCHAR(100),
  "person_contact" VARCHAR(75),
  "contact_msg" text,
  "msg_received" TIMESTAMP,
  "user_id" INT
);
