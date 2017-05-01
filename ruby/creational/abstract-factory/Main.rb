require_relative 'WoodenDoorFactory'
require_relative 'IronDoorFactory'

woodenFactory = WoodenDoorFactory.new
door = woodenFactory.make_door
expert = woodenFactory.make_fitting_expert
door.get_description
expert.get_description

ironFactory = IronDoorFactory.new
door = ironFactory.make_door
expert = ironFactory.make_fitting_expert
door.get_description
expert.get_description
