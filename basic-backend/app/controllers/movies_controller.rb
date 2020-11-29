class MoviesController < ApplicationController

    before_action :set_movie, only: %i[update destroy]
    def index
        data = Movie.all
        render json: MovieEntity.represent(data), status: :ok 
    end

    def create
        @movie = Movie.new(movie_params)
        if @movie.save
            render json: MovieEntity.represent(@movie), status: :ok
        else
            render json: @movie.errors, status: :unprocessable_entity
        end
    end

    def update
        if @movie.update(movie_params)
            render json: MovieEntity.represent(@movie), status: :ok
        else
            render json: @movie.errors, status: :unprocessable_entity
        end
    end

    def destroy
        @movie.destroy
    end

    private

    def movie_params
        params.permit(
            :name,:genre,:description,:id
        )
    end

    def set_movie
        @movie = Movie.find_by(id: params[:id])
    end
end
