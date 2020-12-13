class DirectorsController < ApplicationController
    before_action :set_director, only: %i[movies]

    def movies
        movie_list = @director.movie
        render json: MovieEntity.represent(movie_list), status: :ok
    end

    private

    def set_director
        @director = Director.find_by(id: params[:id])
    end
end
