require_relative 'DoorFactory'
require_relative 'WoodenDoor'
require_relative 'Carpenter'

class WoodenDoorFactory include DoorFactory
  def make_door
    return WoodenDoor.new
  end

  def make_fitting_expert
    return Carpenter.new
  end
end
