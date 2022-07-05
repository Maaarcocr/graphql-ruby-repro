# app/graphql/types/subscription_type.rb
class Types::SubscriptionType < GraphQL::Schema::Object
  field :test, subscription: Subscriptions::Test
  # ...
end