require_relative 'WoodenDoor'

class DoorFactory
  def self.make_door(width, height)
    return WoodenDoor.new(width, height)
  end
end
