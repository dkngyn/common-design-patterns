require_relative 'HiringManager'
require_relative 'CommunityExecutive'

class MarketingManager < HiringManager
  def make_interview
    return CommunityExecutive.new
  end
end
