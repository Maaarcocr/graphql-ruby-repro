class NumberController < ApplicationController
  def index
    RailsRuby3Schema.subscriptions.trigger(:test, {}, {number: 2})
  end
end
