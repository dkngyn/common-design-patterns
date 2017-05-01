require_relative 'Door'

class WoodenDoor include Door
  def get_description
    puts "I am a wooden door"
  end
end
