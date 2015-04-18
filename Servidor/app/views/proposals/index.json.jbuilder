json.array!(@proposals) do |proposal|
  json.extract! proposal, :id, :user_id, :title, :object, :finality, :scope_id, :subject_id
  json.url proposal_url(proposal, format: :json)
end
