class CreateGalleries < ActiveRecord::Migration[5.1]
  def change
    create_table :galleries do |t|
      t.string :title
      t.text :description
      t.string :file_name
      t.text :s3_url
      t.datetime :created_at
      t.datetime :updated_at

      t.timestamps
    end
  end
end
