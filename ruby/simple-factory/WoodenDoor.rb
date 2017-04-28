require_relative 'Door'

class WoodenDoor
  include Door

  @width;
  @height;

  def initialize(width, height)
    @width = width
    @height = height
  end

  def get_width
    return @width
  end

  def get_height
    return @height
  end
end
