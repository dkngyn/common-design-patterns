require_relative 'DoorFactory'
require_relative 'IronDoor'
require_relative 'Welder'

class IronDoorFactory include DoorFactory
  def make_door
    return IronDoor.new
  end

  def make_fitting_expert
    return Welder.new
  end
end
