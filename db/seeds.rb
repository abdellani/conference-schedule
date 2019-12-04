# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Administrator.create({ name: "admin", email: "admin@admin.com", password: "abcdef" })
users = [{ name: "speaker", email: "test@test.com",role:"Senior Developer", password: "abcdef" },
         { name: "speaker1", email: "test@test.com",role:"Senior Developer", password: "abcdef" },
         { name: "moderator", email: "test@test.com",role:"Teacher", password: "abcdef" },
         { name: "participant", email: "test@test.com",role:"Student", password: "abcdef" }]
talks = [{ day: 1, start_time: "00:00", end_time: "01:00", location: "A", description: "blabla" },
         { day: 2, start_time: "02:00", end_time: "03:00", location: "C", description: "blabla" }]
conferences = [
  { date: "01/01/2020", subject: "DevOps", description: "Introduction to docker", location: "University of Computer Science" },
  { date: "01/01/2020", subject: "Security", description: "Introduction to Cryptography", location: "University of Computer Science" },
  { date: "01/01/2020", subject: "System Administration", description: "Introduction in SE-Linux", location: "University of Computer Science" },
  { date: "01/01/2020", subject: "Web development", description: "Introduction into Rails", location: "University of Computer Science" },
]

companies = [
  { 
    name: "company1",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Vestibulum lectus mauris ultrices eros in cursus turpis massa. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Sed euismod nisi porta lorem. Magna fringilla urna porttitor rhoncus. Suspendisse sed",
    website:"www.company1.com",
    telephone:"+000000000",
    email:"company1@email.com",
    address:"Lorem ipsum dolor sit amet",
    pobox:"00000"
    }
  ]

companies.each do |company|
  Company.create(company)
end

conferences.each do |conference|
  Conference.create(conference)
end

conference = Conference.first
company = Company.first
conference.company_participations.create({ role: "sponsor", company: company })
conference.company_participations.create({ role: "exhibitor", company: company })

talks.each do |talk|
  conference.talks.create(talk)
end

users.each do |user|
  User.create(user)
end

talk = conference.talks.first
speaker = User.find_by(name:"speaker")
speaker.attendances.create({ talk: talk, role: "speaker" })
speaker1 = User.find_by(name:"speaker1")
speaker1.attendances.create({ talk: talk, role: "speaker" })

speaker.notifications.create({ checked: false, content: "This is a notification" })

moderator = User.find_by(name:"moderator")
moderator.attendances.create({ talk: talk, role: "moderator" })

participant = User.find_by(name:"participant")
participant.attendances.create({ talk: talk, role: "participant" })
participant.questions.create({ talk: talk, content: "This is question related to the talk !" })

talk2 = conference.talks.second
participant.attendances.create({ talk: talk2, role: "participant" })
