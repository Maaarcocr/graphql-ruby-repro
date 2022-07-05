module Subscriptions
  class Test < Subscriptions::BaseSubscription
    field :number, Types::NumberType, null: false
  end
end