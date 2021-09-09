def saddle_points(matrix):
    if any(map(lambda row: len(row) != len(matrix[0]), matrix)):
        raise ValueError("Irregular matrix")
    return [
            {"row": row_index+1, "column": column_index+1}
            for (row_index, row) in enumerate(matrix)
            for (column_index, value) in enumerate(row)
            if value == max(row)
            and value == min([row[column_index] for row in matrix])
            ]
