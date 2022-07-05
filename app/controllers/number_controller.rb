class NumberController < ApplicationController
  def index
    RailsRuby3Schema.subscriptions.trigger(:test, {}, 1)
  end
end
