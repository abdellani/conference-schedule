# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Administrator.create({ name: "admin", email: "admin@admin.com", password: "abcdef" })
users = [{ name: "speaker", email: "test@test.com", password: "abcdef" },
         { name: "moderator", email: "test@test.com", password: "abcdef" },
         { name: "participant", email: "test@test.com", password: "abcdef" }]
talks=[{ day: 1, start_time: "00:00", end_time: "01:00", location: "A", description: "blabla" },
  { day: 2, start_time: "02:00", end_time: "03:00", location: "C", description: "blabla" },
]

users.each do |user|
  User.create(user)
end

Conference.create({ date: "01/01/2020", location: "Earth" })

conference = Conference.all.first
talks.each do |talk|
  conference.talks.create(talk)
end

talk = conference.talks.first
speaker = User.all.first
speaker.attendances.create({ talk: talk, role: "speaker" })

moderator = User.all.second
moderator.attendances.create({ talk: talk, role: "moderator" })

participant = User.all.last
participant.attendances.create({ talk: talk, role: "participant" })
participant.questions.create({ talk: talk, content: "participant" })

talk2 = conference.talks.second
participant.attendances.create({ talk: talk2, role: "participant" })
