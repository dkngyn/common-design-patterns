require_relative 'DoorFactory'

door = DoorFactory.make_door(100, 200)
puts "width: #{door.get_width}"
puts "height: #{door.get_height}"
