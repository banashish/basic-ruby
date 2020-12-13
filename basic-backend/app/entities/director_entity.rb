class DirectorEntity < Grape::Entity
    expose :name,as: :director_name
    expose :age,as: :director_age
    expose :id,as: :director_id
end