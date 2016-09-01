class Code < ApplicationRecord

  def difficulty(code_level)
    return 'Easy' if code_level <= 2
    return 'Medium' if code_level == 3
    'Hard'
  end

end
