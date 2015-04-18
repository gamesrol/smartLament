json.array!(@votes) do |vote|
  json.extract! vote, :id, :proposal_id, :vote
  json.url vote_url(vote, format: :json)
end
