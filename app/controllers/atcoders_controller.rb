class AtcodersController < ApplicationController
  def show
    user_name = 'atsuya02'
    user_url = "https://kenkoooo.com/atcoder/atcoder-api/results?user={user_name}"
    url=URI.encode(user_url)
    uri = URI.parse(url)
    json = Net::HTTP.get(uri)
    @result = JSON.parse(json)
  end
end
  