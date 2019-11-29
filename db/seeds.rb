# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Administrator.create({name:"admin",email:"admin@admin.com",password:"abcdef"})
User.create({name:"test",email:"test@test.com",password:"abcdef"})
Conference.create({date:"01/01/2020",location:"Earth"})

conference=Conference.all.first
conference.talks.create({day:1,start_time:"00:00",end_time:"01:00",location:"A",description:"blabla"})
talk=conference.talks.first
user=User.all.first
user.attendances.create({talk:talk})