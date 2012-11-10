class CitiesController < ApplicationController

  def index
    @cities = City.all

    respond_to do |f|
      f.html
    end
  end

end
