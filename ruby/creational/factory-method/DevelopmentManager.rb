require_relative 'HiringManager'
require_relative 'Developer'

class DevelopmentManager < HiringManager
  def make_interview
    return Developer.new
  end
end
