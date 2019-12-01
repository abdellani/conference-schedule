# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20191201113502) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "administrators", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "attendances", force: :cascade do |t|
    t.bigint "talk_id"
    t.bigint "user_id"
    t.string "role"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["talk_id"], name: "index_attendances_on_talk_id"
    t.index ["user_id"], name: "index_attendances_on_user_id"
  end

  create_table "companies", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "website"
    t.string "email"
    t.string "address"
    t.string "pobox"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "conferences", force: :cascade do |t|
    t.date "date"
    t.string "location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "notifications", force: :cascade do |t|
    t.bigint "user_id"
    t.string "content"
    t.boolean "checked"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_notifications_on_user_id"
  end

  create_table "participations", force: :cascade do |t|
    t.bigint "company_id"
    t.bigint "conference_id"
    t.string "role"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_participations_on_company_id"
    t.index ["conference_id"], name: "index_participations_on_conference_id"
  end

  create_table "questions", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "talk_id"
    t.string "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["talk_id"], name: "index_questions_on_talk_id"
    t.index ["user_id"], name: "index_questions_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.bigint "speaker_id"
    t.bigint "participant_id"
    t.bigint "talk_id"
    t.integer "evaluation"
    t.string "note"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["participant_id"], name: "index_reviews_on_participant_id"
    t.index ["speaker_id"], name: "index_reviews_on_speaker_id"
    t.index ["talk_id"], name: "index_reviews_on_talk_id"
  end

  create_table "talks", force: :cascade do |t|
    t.integer "day"
    t.time "start_time"
    t.time "end_time"
    t.string "location"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "conference_id"
    t.index ["conference_id"], name: "index_talks_on_conference_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "company"
    t.string "role"
    t.string "email"
    t.string "mobile"
    t.string "password_digest"
    t.string "bio"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "attendances", "talks"
  add_foreign_key "attendances", "users"
  add_foreign_key "notifications", "users"
  add_foreign_key "participations", "companies"
  add_foreign_key "participations", "conferences"
  add_foreign_key "questions", "talks"
  add_foreign_key "questions", "users"
  add_foreign_key "reviews", "talks"
  add_foreign_key "reviews", "users", column: "participant_id"
  add_foreign_key "reviews", "users", column: "speaker_id"
  add_foreign_key "talks", "conferences"
end
