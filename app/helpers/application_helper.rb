module ApplicationHelper

  def audio_path(source, options = {})
    path_to_asset(source, {type: :audio}.merge!(options))
  end
  
end
