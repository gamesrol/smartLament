class Proposal < ActiveRecord::Base
    belongs_to :scope
    belongs_to :subject
    has_many :votes
end
