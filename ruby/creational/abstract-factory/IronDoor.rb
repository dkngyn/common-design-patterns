require_relative 'Door'

class IronDoor include Door
  def get_description
    puts "I am an iron door"
  end
end
