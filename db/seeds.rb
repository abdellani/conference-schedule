# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
random_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\
      Integer enim neque volutpat ac tincidunt vitae semper quis lectus.\
      Vestibulum lectus mauris ultrices eros in cursus turpis massa."

questions = [
  "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\
  Integer enim neque volutpat ac tincidunt vitae semper quis lectus.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
  "Lorem ipsum dolor sit amet ?",
  "Lorem ipsum ?",
]
answers = [
  "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\
  Integer enim neque volutpat ac tincidunt vitae semper quis lectus.",
  "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "eiusmod tempor!",
  "iu :)",
]
user = { name: "Engineer",
        email: "user@user.xyz",
        role: "Engineer",
        password: "abcdef",
        company: "Company",
        bio: "Lorem ipsum",
        mobile: "+000000000" }

users_data = [
  {
    speakers: [{
      name: "DevOps Engineer",
      email: "speaker@docker.xyz",
      role: "Senior DevOps Engineer",
      password: "abcdef",
      company: "Company",
      bio: "Lorem ipsum",
      mobile: "+000000000",
    },
               {
      name: "Software Engineer",
      email: "speaker1@docker.xyz",
      role: "Senior Software Engineer",
      password: "abcdef",
      company: "Company",
      bio: "Lorem ipsum",
      mobile: "+000000000",
    }],
    moderators: [{
      name: "Moderator",
      email: "moderator@docker.xyz",
      role: "Teacher",
      password: "abcdef",
      company: "Company",
      bio: "Lorem ipsum",
      mobile: "+000000000",
    }],
    participants: [{
      name: "docker fan",
      email: "participant@docker.xyz",
      role: "Student",
      password: "abcdef",
      company: "Company",
      bio: "Lorem ipsum",
      mobile: "+000000000",
    }],
  },
  {
    speakers: [{
      name: "Senior Developer",
      email: "speaker@rails.xyz",
      role: "Senior Ruby on Rails Developer",
      password: "abcdef",
      company: "Company",
      bio: "Lorem ipsum",
      mobile: "+000000000",
    }],
    moderators: [{
      name: "Moderator",
      email: "moderator@rails.xyz",
      role: "Developer",
      password: "abcdef",
      company: "Company",
      bio: "Lorem ipsum",
      mobile: "+000000000",
    }],
    participants: [{
      name: "Rails Fan",
      email: "participant@rails.xyz",
      role: "Student",
      password: "abcdef",
      company: "Company",
      bio: "Lorem ipsum",
      mobile: "+000000000",
    },
                   {
      name: "Ruby Newbie",
      email: "participant1@rails.xyz",
      role: "Student",
      password: "abcdef",
      company: "Company",
      bio: "Lorem ipsum",
      mobile: "+000000000",
    }],
  },
  {
    speakers: [{
      name: "Malware Analyst",
      email: "speaker@cryptography.xyz",
      role: "Senior Malware Analyst",
      password: "abcdef",
      company: "Company",
      bio: "Lorem ipsum",
      mobile: "+000000000",
    }],
    moderators: [{
      name: "Moderator",
      email: "moderator@cryptography.xyz",
      role: "Penetration tester",
      password: "abcdef",
      company: "Company",
      bio: "Lorem ipsum",
      mobile: "+000000000",
    }],
    participants: [{
      name: "Malware Newbie",
      email: "participant@cryptography.xyz",
      role: "Student",
      password: "abcdef",
      company: "Company",
      bio: "Lorem ipsum",
      mobile: "+000000000",
    },
                   {
      name: "Security Newbie",
      email: "participant1@cryptography.xyz",
      role: "Student",
      password: "abcdef",
      company: "Company",
      bio: "Lorem ipsum",
      mobile: "+000000000",
    }],
  },
]
conferences_data = [
  {
    date: "01/01/2020",
    subject: "DevOps",
    description: "Introduction to docker",
    location: "University X",
  },
  {
    date: "09/01/2020",
    subject: "Web development",
    description: "Introduction into Rails",
    location: "University Z",
  },
  {
    date: "05/01/2020",
    subject: "Security",
    description: "Introduction to Cryptography",
    location: "University Y",
  },
]

talks_data = [
  [
    {
      day: 1, start_time: "09:00", end_time: "10:00", location: "A",
      title: "Opening",
      description: random_text,
    },
    {
      day: 1, start_time: "10:00", end_time: "12:00", location: "C",
      title: "Introduction to Docker",
      description: random_text,
    },
    {
      day: 1, start_time: "13:00", end_time: "15:00", location: "C",
      title: "Getting Started with Docker",
      description: random_text,
    },
    {
      day: 2, start_time: "09:00", end_time: "12:00", location: "C",
      title: "Working with Docker images and repositoriesr",
      description: random_text,
    },
    {
      day: 2, start_time: "13:00", end_time: "14:00", location: "C",
      title: "Testing with Docker",
      description: random_text,
    },
    {
      day: 2, start_time: "14:00", end_time: "15:00", location: "C",
      title: "Building services with Docker",
      description: random_text,
    },
    {
      day: 3, start_time: "10:00", end_time: "12:00", location: "C",
      title: "Orchestration with Docker Compose, Docker Swarm and Consul",
      description: random_text,
    },
    {
      day: 3, start_time: "13:00", end_time: "15:00", location: "C",
      title: "Using the Docker API",
      description: random_text,
    },
  ],
  [
    {
      day: 1, start_time: "09:00", end_time: "10:00", location: "A",
      title: "Opening",
      description: random_text,
    },
    {
      day: 1, start_time: "10:00", end_time: "12:00", location: "C",
      title: "The ruby programming language",
      description: random_text,
    },
    {
      day: 1, start_time: "13:00", end_time: "15:00", location: "C",
      title: "Introduction to Ruby on Rails",
      description: random_text,
    },
    {
      day: 2, start_time: "09:00", end_time: "12:00", location: "C",
      title: "CRUD operation in Ruby on Rails",
      description: random_text,
    },
    {
      day: 2, start_time: "13:00", end_time: "14:00", location: "C",
      title: "Association and Authentication Systems",
      description: random_text,
    },
    {
      day: 2, start_time: "14:00", end_time: "15:00", location: "C",
      title: "BDD with Cucumber and Capybara",
      description: random_text,
    },
    {
      day: 3, start_time: "10:00", end_time: "12:00", location: "C",
      title: "TDD with RSpec",
      description: random_text,
    },
    {
      day: 3, start_time: "13:00", end_time: "15:00", location: "C",
      title: "Advanced Ruby on Rails",
      description: random_text,
    },
  ],
  [
    {
      day: 1, start_time: "09:00", end_time: "10:00", location: "A",
      title: "Opening",
      description: random_text,
    },
    {
      day: 1, start_time: "10:00", end_time: "12:00", location: "C",
      title: "The mathematical concepts underpinning cryptography",
      description: random_text,
    },
    {
      day: 1, start_time: "13:00", end_time: "15:00", location: "C",
      title: "Classical cryptography and historical ciphers",
      description: random_text,
    },
    {
      day: 2, start_time: "09:00", end_time: "12:00", location: "C",
      title: "The basics of cryptanalysis",
      description: random_text,
    },
    {
      day: 2, start_time: "13:00", end_time: "14:00", location: "C",
      title: "Random number generation",
      description: random_text,
    },
    {
      day: 2, start_time: "14:00", end_time: "15:00", location: "C",
      title: "Random number generation",
      description: random_text,
    },
  ],
]

companies_data = [
  {
    name: "company1",
    description: random_text,
    website: "www.company1.com",
    telephone: "+000000000",
    email: "company1@email.com",
    address: "Lorem ipsum dolor sit amet",
    pobox: "00000",
  },
  {
    name: "company2",
    description: random_text,
    website: "www.company2.com",
    telephone: "+000000000",
    email: "company2@email.com",
    address: "Lorem ipsum dolor sit amet",
    pobox: "00000",
  },
  {
    name: "company3",
    description: random_text,
    website: "www.company3.com",
    telephone: "+000000000",
    email: "company3@email.com",
    address: "Lorem ipsum dolor sit amet",
    pobox: "00000",
  },
]

conferences_data.each_with_index do |conference, index|
  c = Conference.create(conference)
  participants = []
  moderators = []
  speakers = []
  users_data[index][:participants].each do |participant|
    participants << User.create(participant)
  end
  users_data[index][:moderators].each do |moderator|
    moderators << User.create(moderator)
  end
  users_data[index][:speakers].each do |speaker|
    speakers << User.create(speaker)
  end

  talks_data[index].each do |talk_data|
    talk = c.talks.create(talk_data)
    participants.each do |participant|
      talk.participants << participant
      talk.questions.create(content: questions.sample, user: participant)
    end
    moderators.each do |moderator|
      talk.moderators << moderator
      talk.questions.create(content: answers.sample, user: moderator)
    end
    speakers.each do |speaker|
      talk.speakers << speaker
      talk.questions.create(content: answers.sample, user: speaker)
    end
  end
end

companies_data.each do |company|
  Company.create(company)
end
companies = Company.all
conferences = Conference.all

conferences[0].sponsors<< companies[0]
conferences[0].sponsors<< companies[1]
conferences[0].exhibitors<< companies[2]

conferences[1].sponsors<< companies[1]
conferences[1].sponsors<< companies[2]
conferences[1].exhibitors<< companies[0]
conferences[1].exhibitors<< companies[2]

conferences[2].sponsors<< companies[1]
conferences[2].exhibitors<< companies[0]
conferences[2].exhibitors<< companies[1]
conferences[2].exhibitors<< companies[2]

Administrator.create({ name: "admin", email: "admin@admin.com", password: "abcdef" })
User.create(user)

########################################################
# conferences.each do |conference|
#   Conference.create(conference)
# end

# conference = Conference.first
# company = Company.first
# conference.company_participations.create({ role: "sponsor", company: company })
# conference.company_participations.create({ role: "exhibitor", company: company })

# talks.each do |talk|
#   conference.talks.create(talk)
# end

# users.each do |user|
#   User.create(user)
# end

# talk = conference.talks.first
# speaker = User.find_by(name: "speaker")
# speaker.attendances.create({ talk: talk, role: "speaker" })
# speaker1 = User.find_by(name: "speaker1")
# speaker1.attendances.create({ talk: talk, role: "speaker" })

# speaker.notifications.create({ checked: false, content: "This is a notification" })

# moderator = User.find_by(name: "moderator")
# moderator.attendances.create({ talk: talk, role: "moderator" })

# participant = User.find_by(name: "participant")
# participant.attendances.create({ talk: talk, role: "participant" })
# participant.questions.create({ talk: talk, content: "This is question related to the talk !" })

# talk2 = conference.talks.second
# participant.attendances.create({ talk: talk2, role: "participant" })
