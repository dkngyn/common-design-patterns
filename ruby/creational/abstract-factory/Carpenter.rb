require_relative 'DoorFittingExpert'

class Carpenter include DoorFittingExpert
  def get_description
    puts "I can only fit wooden doors"
  end
end
