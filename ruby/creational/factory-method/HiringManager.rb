class HiringManager
  def make_interview
    raise "must be implemented by a class"
  end

  def take_interview
    interviewer = self.make_interview;
    interviewer.ask_questions;
  end
end
