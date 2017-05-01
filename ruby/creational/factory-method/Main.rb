require_relative 'DevelopmentManager'
require_relative 'MarketingManager'

devManager = DevelopmentManager.new
devManager.take_interview

marketingManager = MarketingManager.new
marketingManager.take_interview
