class TopPagesController < ApplicationController
  def show
    user_name = 'atsuya02'
    user_url = "https://kenkoooo.com/atcoder/atcoder-api/results?user=#{user_name}"
    url=URI.encode(user_url)
    uri = URI.parse(url)
    json = Net::HTTP.get(uri)
    @results= JSON.parse(json)
    if @results.nil?
      @problem = '表示するデータがありません'
    else
      @problem = @results[0]
      number = @results[0]["epoch_second"]
      @results.each do |result|
        if number < result["epoch_second"]
          number = result["epoch_second"]
          @problem = Time.at(result["epoch_second"])
        end
      end
    end
  end
end
