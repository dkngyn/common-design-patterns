require_relative 'DoorFittingExpert'

class Welder include DoorFittingExpert
  def get_description
    puts "I can only fit iron doors"
  end
end
