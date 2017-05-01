require_relative 'Interviewer'

class Developer include Interviewer
  def ask_questions
    puts 'Asking about design patternss';
  end
end
