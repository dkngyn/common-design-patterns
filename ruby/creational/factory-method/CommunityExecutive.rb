require_relative 'Interviewer'

class CommunityExecutive include Interviewer
  def ask_questions
    puts 'Asking about community building';
  end
end
