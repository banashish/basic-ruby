class MovieEntity < Grape::Entity
    expose :id, :name, :genre, :description
end